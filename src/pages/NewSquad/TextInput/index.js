import React from 'react';
import cn from 'classnames';

const TextInput = ({
  label,
  value,
  id,
  error,
  onChange,
  className = '',
  ...props
}) => (
  <div className="w-full">
    <label htmlFor={id}>
      <p
        data-testid="label"
        className={cn('font-bold text-base', error && 'text-primary-dark')}
      >
        {label}
      </p>
      <input
        data-testid="input"
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          'border-2 w-full rounded p-1 focus:border-gray-500',
          error && 'border-primary-dark focus:border-primary-dark',
          className
        )}
        {...props}
      />
    </label>
  </div>
);

export default TextInput;
