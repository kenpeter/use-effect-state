import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {SearchInput, SearchUL, SearchLI} from './index.style';

/*

//setup before functions

// timer id
var typingTimer;     
// 5s stop           
var doneTypingInterval = 5000;  //time in ms, 5 second for example
// search input
var $input = $('#myInput');

// key up
$input.on('keyup', function () {
  // clear old timer
  clearTimeout(typingTimer);
  // set new timer, callback, 5s time
  typingTimer = setTimeout(doneTyping, doneTypingInterval);
});

// key press
$input.on('keydown', function () {
  // clear old timer id
  clearTimeout(typingTimer);
});

//user is "finished typing," do something
function doneTyping () {
  //do something
}

*/

const Autocomplete = ({suggestions = []}) => {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState('');

  // timer id
  let typingTimer;
  //
  let doneTypingInterval = 1000;

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

  // done
  const doneTyping = () => {
    console.log('done type');
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
      // else other keys, assume typing
      clearTimeout(typingTimer);
    }
  };

  // key up
  const onKeyUp = e => {
    // clear old timer
    clearTimeout(typingTimer);
    // set new timer, callback, done time
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
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

  return (
    <>
      <SearchInput
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        value={userInput}
      />
      {suggestionsListComponent}
    </>
  );
};

export default Autocomplete;
