import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Autocomplete = ({suggestions = []}) => {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState('');

  const onChange = e => {
    // input
    const userInput = e.currentTarget.value;

    // match
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    // set state
    setActiveSuggestion(0);
    setFilteredSuggestions(filteredSuggestions);
    setShowSuggestions(true);
    setUserInput(e.currentTarget.value);
  };

  const onClick = e => {
    // set state
    setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(e.currentTarget.innerText); //?
  };

  const onKeyDown = e => {
    // enter
    if (e.keyCode === 13) {
      // state
      setActiveSuggestion(0);
      setShowSuggestions(false);
      setUserInput(filteredSuggestions[activeSuggestion]);
    } else if (e.keyCode === 38) {
      // up arrow
      // no active, out
      if (activeSuggestion === 0) {
        return;
      }

      // -1
      setActiveSuggestion(activeSuggestion - 1);
    } else if (e.keyCode === 40) {
      // down arr
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      // +1
      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  // tmp: sugList
  let suggestionsListComponent;
  // state: show and u-input
  if (showSuggestions && userInput) {
    // state: filterSug.len
    if (filteredSuggestions.length) {
      // ul + li
      suggestionsListComponent = (
        <ul>
          {filteredSuggestions.map((suggestion, index) => {
            return (
              <li key={suggestion} onClick={onClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    } else {
      // no
      suggestionsListComponent = (
        <div>
          <em>No suggestions!</em>
        </div>
      );
    }
  }

  return (
    <>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={userInput}
      />
      {suggestionsListComponent}
    </>
  );
};

export default Autocomplete;
