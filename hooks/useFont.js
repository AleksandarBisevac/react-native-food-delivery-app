import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';

export default useFonts = () => {
  const [isReady, setIsReady] = useState(false);

  const LoadFonts = async () => {
    const loading = await Font.loadAsync({
      'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
      'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
      'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
      'Poppins-Italic': require('../assets/fonts/Poppins-Italic.ttf'),
    });
    if (loading) {
      setIsReady(true);
    }
  };

  useEffect(() => {
    LoadFonts();
  }, []);
};
