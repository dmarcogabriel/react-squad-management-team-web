import React from 'react';
import cn from 'classnames';

const TextInput = ({
  label,
  value,
  id,
  error,
  onChange = () => {},
  ...props
}) => (
  <div>
    <label htmlFor={id}>
      <p className={cn('font-bold text-base', error && 'text-primary-dark ')}>
        {label}
      </p>
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          'border-2 rounded p-1 focus:border-gray-500',
          error && 'border-primary-dark focus:border-primary-dark'
        )}
        {...props}
      />
    </label>
  </div>
);

export default TextInput;
