import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const ICON_SIZE = 24;

const Select = ({ value, options = [], id, onChange = () => {} }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [defaultValue, setDefaultValue] = useState('Chose one...');
  const [optionsList, setOptionsList] = useState(options);

  const handleClickOutside = (e) => {
    const { classList } = e.target;

    if (
      !classList.contains('option') &&
      !classList.contains('selected-option')
    ) {
      setShowOptions(false);
    }
  };

  const handleSelectOption = (e) => {
    setOptionsList(
      optionsList.map((option) => {
        return option.id === e.id
          ? { ...option, selected: true }
          : { ...option, selected: false };
      })
    );
    setDefaultValue(e.label);
    setShowOptions(false);
    onChange(e);
  };

  const isSelected = (selected) =>
    selected ? 'bg-primary-dark text-white' : 'bg-white text-black';

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  useEffect(() => {
    if (value) {
      setDefaultValue(value);
    }
  }, [value]);

  return (
    <div className="relative w-40">
      <button
        type="button"
        className="bg-white border-2 border-gray-600 rounded cursor-pointer"
        onClick={() => setShowOptions(!showOptions)}
      >
        <div className="flex">
          <p className="py-1 w-24">{defaultValue}</p>

          <div className="border-l-2 border-gray-600 flex items-center justify-center px-1">
            {showOptions ? (
              <MdKeyboardArrowUp className="text-black" size={ICON_SIZE} />
            ) : (
              <MdKeyboardArrowDown className="text-black" size={ICON_SIZE} />
            )}
          </div>
        </div>
      </button>

      {showOptions && (
        <ul id={id} className="absolute bg-white shadow-xl z-50">
          {optionsList.map((option) => (
            <li className="w-40" key={option.id}>
              <button
                type="button"
                className={`option flex justify-center w-full py-3 font-base cursor-pointer ${isSelected(
                  option.selected
                )}`}
                data-name={option.label}
                key={option.id}
                onClick={() => handleSelectOption(option)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
