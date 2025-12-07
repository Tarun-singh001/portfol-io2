import { useState, useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

const VantaBackground = () => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: vantaRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: rgba(204, 166, 243, 1),
                backgroundColor: 0x0,
                points: 18.00,
                maxDistance: 20.00,
                spacing: 15.00,
                showDots: true
            }));
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div ref={vantaRef} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            pointerEvents: 'none'

        }} />
    );
};

export default VantaBackground;
