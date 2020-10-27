import React from 'react';
import cn from 'classnames';

const Radio = ({
  className = '',
  label,
  options = [],
  onChange = () => {},
}) => {
  const isSelected = (selected) =>
    selected ? 'border-primary-dark' : 'border-gray-500';

  return (
    <div className={className}>
      <p className="font-bold text-base mb-2">{label}</p>

      <div className="flex justify-between">
        {options.map((option) => (
          <button
            type="button"
            key={option.id}
            className="flex items-center"
            onClick={() => onChange(option)}
          >
            <div
              className={cn(
                'rounded-full p-3 border-1 mr-3 relative',
                isSelected(option.selected)
              )}
            >
              {option.selected && (
                <div className="bg-primary-dark w-5 h-5 absolute m-auto top-0 bottom-0 right-0 left-0 rounded-full" />
              )}
            </div>

            <p
              className={cn(
                'inline text-sm',
                option.selected ? 'text-primary-dark' : 'text-gray-500'
              )}
            >
              {option.label}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Radio;
