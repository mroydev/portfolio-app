import React from 'react';

export const handleKeyPress = (
  e:
    | React.KeyboardEvent<HTMLInputElement>
    | React.KeyboardEvent<HTMLTextAreaElement>
) => {
  if (e.key === 'Enter') {
    e.preventDefault();
  }
};
