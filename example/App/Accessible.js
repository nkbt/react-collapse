import React, {useState} from 'react';
import {Collapse} from '../../src';

export function Accessible() {
  const height = 100;

  const accessibilityIds = {
    checkbox: 'accessible-marker-example1',
    button: 'accessible-marker-example2'
  };

  const [state, setState] = useState({
    isCheckboxCollapseOpen: false,
    isButtonCollapseOpen: false
  });

  return (
    <div className="accessible">
      <ul>
        <li>
          <div>
            <h6>With a checkbox</h6>
            <div className="config">
              <label className="label">
                Opened:
                <input
                  className="input"
                  type="checkbox"
                  aria-controls={accessibilityIds.checkbox}
                  checked={state.isCheckboxCollapseOpen}
                  onChange={({target: {checked}}) => setState({isCheckboxCollapseOpen: checked})} />
              </label>
            </div>
            <Collapse isOpened={state.isCheckboxCollapseOpen}>
              <div style={{height}} id={accessibilityIds.checkbox} className="blob" />
            </Collapse>
          </div>
        </li>

        <li>
          <div>
            <h6>With a button</h6>
            <div className="config">
              <button
                aria-controls={accessibilityIds.button}
                aria-expanded={state.isButtonCollapseOpen}
                onClick={() => setState({isButtonCollapseOpen: !state.isButtonCollapseOpen})}
                type="button">
                Reveal content
              </button>
            </div>
            <Collapse
              isOpened={state.isButtonCollapseOpen}>
              <div style={{height}} id={accessibilityIds.button} className="blob" />
            </Collapse>
          </div>
        </li>
      </ul>
    </div>
  );
}
