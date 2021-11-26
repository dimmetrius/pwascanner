import React, {useRef, useEffect, useState, useMemo} from 'react';
import {BrowserQRCodeReader, IScannerControls} from '@zxing/browser';

const VisSwitcher: React.FC = ({children}) => {
    const [visible, setVisible] = useState<boolean>(true)
    useEffect(()=>{
        const onVisChange = () => {
            setVisible(document.visibilityState === 'visible')
          }
        document.addEventListener('visibilitychange', onVisChange);
        return () => {
            document.removeEventListener('visibilitychange', onVisChange)
        }
    })

    return visible ? <> {children} </>: null
}

const Scanner = () => {
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
                    setSelectedDevice(videoInputDevices[0])
                }
            }).catch(e => {
                setError(e.toString())
            })
    }, []);

    useEffect(() => {
        if(codeReader && selectedDevice && video.current != null){
            let controls: IScannerControls;

            codeReader
            .decodeFromVideoDevice(selectedDevice.deviceId, video.current, function (result, error) {
                if(error){
                    setError(error.message)
                }else if (result) {
                    setText(result.getText())
                }
            }).then(cls => {
                controls = cls;
            })

            return () => {
                if (controls){
                    controls.stop()
                }
            }
        }
    }, [codeReader, selectedDevice])

    return (
        <>
            {error && <div style={{color: 'red'}}> {error} </div>}
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
                {inputDevices.map(d => {
                    return <button onClick={()=>{
                        setSelectedDevice(d)
                    }} key={d.deviceId}>{d.label}</button>
                })}
            </div>
            <video
                style={{width: 'min(50vw, 50vh)', height: 'min(50vw, 50vh)', borderStyle: 'dashed', borderWidth: 1, borderColor: 'red', objectFit: 'cover'}}
                ref={video}
            ></video>
            <div>{text}</div>
        </>
    );
}

const WrappedScanner = () => <VisSwitcher><Scanner/></VisSwitcher>

export default WrappedScanner