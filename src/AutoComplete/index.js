import React, {useState} from 'react';
import {SearchInput, SearchUL, SearchLI} from './index.style';

// based on this: https://programmingwithmosh.com/react/simple-react-autocomplete-component/
const Autocomplete = ({suggestions = []}) => {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // timer id
  let typingTimer;
  //
  let doneTypingInterval = 1000;

  // on change
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

  // onclick
  const onClick = e => {
    // set state
    setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(e.currentTarget.innerText); //?

    console.log('on click');
  };

  // done
  const doneTyping = () => {
    console.log('done type');
    setIsTyping(false);
  };

  // key down
  const onKeyDown = e => {
    if (e.keyCode === 13) {
      // 1. enter key
      // state
      setActiveSuggestion(0);
      setShowSuggestions(false);
      setUserInput(filteredSuggestions[activeSuggestion]);
    } else if (e.keyCode === 38) {
      // 2. up arrow key
      // no active, out
      if (activeSuggestion === 0) {
        return;
      }

      // go up, -1
      setActiveSuggestion(activeSuggestion - 1);
    } else if (e.keyCode === 40) {
      // 3. down arr
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      // go down +1
      setActiveSuggestion(activeSuggestion + 1);
    } else {
    }
  };

  // key up
  const onKeyUp = e => {
    // clear old timer
    clearTimeout(typingTimer);

    // has val, then clean up
    if (e.currentTarget.value) {
      setIsTyping(true);
      typingTimer = setTimeout(doneTyping, doneTypingInterval);
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
        <SearchUL>
          {filteredSuggestions.map((suggestion, index) => {
            return (
              <SearchLI key={suggestion} onClick={onClick}>
                {suggestion}
              </SearchLI>
            );
          })}
        </SearchUL>
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

  // --------
  // NOTE: this makes the drop down list disappear, but not able to click the list
  // --------
  const onBlur = () => {
    setShowSuggestions(false);
  };

  return (
    <>
      <SearchInput
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        value={userInput}
        isTyping={isTyping}
        //onBlur={onBlur}
      />
      {suggestionsListComponent}
    </>
  );
};

export default Autocomplete;
