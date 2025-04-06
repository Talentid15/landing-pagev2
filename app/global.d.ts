interface NavigatorUAData {
    getHighEntropyValues(hints: string[]): Promise<{
      platform?: string;
      architecture?: string;
      model?: string;
      bitness?: string;
    }>;
  }