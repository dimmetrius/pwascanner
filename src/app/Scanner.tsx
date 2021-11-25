import React, {useRef, useEffect, useState, useMemo} from 'react';
import {BrowserQRCodeReader, IScannerControls} from '@zxing/browser';

export default function Scanner() {
    const video = useRef<HTMLVideoElement>(null);
    const [inputDevices, setInputDevices] = useState<MediaDeviceInfo[]>([])
    const [selectedDevice, setSelectedDevice] = useState<MediaDeviceInfo>()
    const [text, setText] = useState<string>('')
    const [error, setError] = useState<string>('')
    const codeReader = useMemo(()=>{
        return new BrowserQRCodeReader()
    }, []);

    useEffect(() => {
        BrowserQRCodeReader.listVideoInputDevices().then((videoInputDevices) => {
                if(videoInputDevices && videoInputDevices.length){
                    setInputDevices(videoInputDevices)
                    //setSelectedDevice(videoInputDevices[0])
                }
            }).catch(e => {
                setError(e.toString())
            })
    }, [codeReader]);

    useEffect(() => {
        if(selectedDevice && video.current != null){
            let controls: IScannerControls;

            codeReader
            .decodeFromVideoDevice(selectedDevice.deviceId, video.current, function (result, error) {
                if (result) {
                    setText(result.getText())
                }
            }).then(cls => {
                controls = cls;
            })

            return () => {
                if (controls){
                    //controls.stop()
                }
            }
        }
    }, [codeReader, selectedDevice])

    console.log(video.current)

    if (error) {
        return <div> {error}</div>
    }
    return (
        <>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
                {inputDevices.map(d => {
                    return <button onClick={()=>{
                        setSelectedDevice(d)
                    }} key={d.deviceId}>{d.label}</button>
                })}
            </div>
            <video
                style={{width: '50vw', height: '50vh', borderStyle: 'dashed', borderWidth: 1, borderColor: 'red'}}
                ref={video}
            ></video>
            <div>{text}</div>
        </>
    );
}