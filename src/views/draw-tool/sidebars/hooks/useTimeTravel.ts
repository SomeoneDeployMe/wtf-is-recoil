import {useState} from 'react';
import {Snapshot, useGotoRecoilSnapshot, useRecoilSnapshot} from 'recoil';

export const useTimeTravel = () => {
  const [lastSavedSnapshot, setLastSavedSnapshot] = useState<Snapshot | null>(null);
  const snapshot = useRecoilSnapshot();
  const gotoSnapshot = useGotoRecoilSnapshot();

  const save = () => {
    setLastSavedSnapshot(snapshot);
  }

  const restore = () => {
    if (lastSavedSnapshot) {
      gotoSnapshot(lastSavedSnapshot);
      setLastSavedSnapshot(null);
    }
  }

  return {save, restore, hasSavedSnapshot: !!lastSavedSnapshot};
};
