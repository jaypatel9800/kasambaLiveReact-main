import { rtc } from "./rtc";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const MainFrame = () => {
  const [audio, setAudio] = useState(false);
  const [video, setVideo] = useState(false);
  const history = useHistory();

  const LeaveHost = async () => {
    await rtc.localStream.stop('local_stream')
    await rtc.localStream.close("local_stream");
    await rtc.client.leave(() => {
      console.log("Host was Leave");
    });
    await rtc.client.unpublish(rtc.localStream, (error) => {
      console.log("not able to leave as host", error);
    });
    history.replace("/Final");
  };

  const Audiomute = () => {
    if (!audio) {
      rtc.localStream.muteAudio();
      setAudio(true);
    } else {
      rtc.localStream.unmuteAudio();
      setAudio(false);
    }
  };

  const videoMute = () => {
    if (!video) {
      rtc.localStream.muteVideo();
      setVideo(true);
    } else {
      rtc.localStream.unmuteVideo();
      setVideo(false);
    }
  };

  return (
    <div>
      <div
        id="local_stream"
        style={{ width: "400px", height: "400px" }}
      ></div>
      <button onClick={Audiomute}>{audio ? `AudioUnmute` : `AudioMute`}</button>
      <button onClick={videoMute}>{video ? `videoUnmute` : `VideoMute`}</button>
      <button onClick={LeaveHost}>Leave as a Host</button>
    </div>
  );
};

export default MainFrame;
