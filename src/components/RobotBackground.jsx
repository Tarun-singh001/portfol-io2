import Spline from '@splinetool/react-spline';

export default function RobotBackground() {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            overflow: 'hidden',
            opacity: 0.6 // Subtle opacity so text pops
        }}>
            {/* 
        This is a public Spline scene URL. 
        I've selected a "Robot/Tech" themed one if available, or a generic placeholder.
        You can replace this URL with any Spline scene from spline.design 
      */}
            <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />

            {/* Alternative lighter scene if the above is too heavy or broken: */}
            {/* <Spline scene="https://prod.spline.design/MiniRoom-scene.splinecode" /> */}
        </div>
    );
}
