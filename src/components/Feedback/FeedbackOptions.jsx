import PropTypes from 'prop-types'
import css from "../Feedback/FeedbackOptions.module.css";
// import styled from 'styled-components'

export const FeedbackOptions = ({options, onLeaveFeedback}) => { 
    console.log(options);
    return <ul className={css.list}>
        {options.map(key => {
            return <li key={key}>
                <button type="button" name={key} onClick={onLeaveFeedback}>{ key}</button>
               
            </li>
        })}
    </ul>
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};