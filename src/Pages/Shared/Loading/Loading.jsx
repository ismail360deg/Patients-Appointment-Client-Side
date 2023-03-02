import React from 'react';
import { BallTriangle } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className="h-screen flex justify-center items-center backdrop-blur-[9xl]">
        <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#0FCEE8"
            ariaLabel="ball-triangle-loading"
            visible={true}
        />
    </div>
    );
};

export default Loading;