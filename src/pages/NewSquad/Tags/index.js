import React, { useState, createRef, useEffect } from 'react';
import { MdClose } from 'react-icons/md';

const Tags = ({ defaultTags, onChange = () => {}, className }) => {
  const [tags, setTags] = useState([]);
  const [text, setText] = useState('');

  const textInputRef = createRef();

  const handleRemoveTag = (e) => {
    const newTags = tags.filter((t) => t !== e);
    setTags(newTags);
    onChange(newTags);
    setText('');
  };

  useEffect(() => {
    if (text.includes(';') || text.includes('\n')) {
      const [tag] = text.split(';');
      const newTags = [...tags, tag];

      setTags(newTags);
      onChange(newTags);
      setText('');
    }
  }, [text]);

  useEffect(() => {
    if (defaultTags && defaultTags.length) setTags(defaultTags);
  }, [defaultTags]);

  return (
    <div className={className}>
      <label htmlFor="tags">
        <p className="font-bold text-base">Tags</p>

        <button
          data-testid="button-field"
          type="button"
          onClick={() => textInputRef.current.focus()}
          className="flex rounded border-2 border-gray-400 my-3 py-2 w-full min-height-3 z-10"
        >
          <div data-testid="tags" className="flex flex-wrap relative">
            {tags.map((tag) => (
              <button
                data-testid={`tag-button-${tag}`}
                key={tag}
                type="button"
                className="flex justify-between items-center py-1 px-2 m-1 bg-primary-dark text-white text-sm rounded-full"
                onClick={() => handleRemoveTag(tag)}
              >
                <p className="inline mr-2">{tag}</p>

                <MdClose />
              </button>
            ))}

            <p data-testid="value" className="inline text-base">
              {text}
            </p>
          </div>

          <textarea
            data-testid="textarea"
            id="tags"
            ref={textInputRef}
            className="opacity-0 resize-none absolute z-0"
            value={text}
            onChange={({ target }) => setText(target.value)}
          />
        </button>
      </label>
    </div>
  );
};

export default Tags;
