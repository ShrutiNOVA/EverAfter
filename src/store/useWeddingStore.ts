import { create } from 'zustand';

interface WeddingStoreState {
  selectedDayId: string;
  hasUnreadUpdates: boolean;
  cameraFilmRemaining: number;
  setSelectedDayId: (dayId: string) => void;
  markUpdatesRead: () => void;
}

export const useWeddingStore = create<WeddingStoreState>((set) => ({
  selectedDayId: 'day-1',
  hasUnreadUpdates: true,
  cameraFilmRemaining: 24,
  setSelectedDayId: (dayId) => set({ selectedDayId: dayId }),
  markUpdatesRead: () => set({ hasUnreadUpdates: false }),
}));
