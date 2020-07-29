import React from "react";
import { Player } from "video-react";

function GG () {
    return (
        <div>
            <Player
            playsInline
            src="C:\Users\GC\Documents\Rounders.1998.1080p.BluRay.H264.AAC-RARBG.mp4" />
            {/* <video controls>
                <source src="C:\Users\GC\Documents\Rounders.1998.1080p.BluRay.H264.AAC-RARBG.mp4" type="video/mp4"/>
                <track src="C:\Users\GC\Documents\Dirty.Grandpa.2016.1080p.BluRay.6CH.x264-ShAaNiG.vtt" label="Korean Captions" kind="captions" srclang="kor" default /> 
            </video> */}
        </div>
    )
}

export default GG;