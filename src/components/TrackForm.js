import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
  const { state: { name, recording }, 
    startRecording, stopRecording, changeName } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input value={name} onChangeText={changeName} placeholder="Enter Track Name" />
      </Spacer>
      <Spacer>
        {recording ? 
          <Button title="Stop Recording" onPress={stopRecording} /> :
          <Button onPress={startRecording} title="Start Recording" />
        }
      </Spacer>
      <Spacer>
        {!recording && LocationSubscriber.length ?
          <Button title="Save Recording" onPress={saveTrack} /> : null
        }
      </Spacer>
    </>
  )
}

export default TrackForm;