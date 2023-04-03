import * as React from 'react';

interface Props {
  defaultValue: string;
  onChange: (value: string) => void;
  options: ReadonlyArray<{
    name: string;
    value: string;
  }>;
  value: string;
}

export function MySelect({ options, defaultValue, value, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={(event) => {
        onChange(event.target.value);
      }}
    >
      <option disabled value=''>
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
