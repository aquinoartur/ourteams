import * as React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { View } from 'react-native';
import { BackIcon, BackIconButton } from './styles';

export function BackButton() {
 return (
  <BackIconButton>
   < BackIcon name='chevron-back' />
  </BackIconButton>
 );
}