import React from 'react';
import './addBoard.scss';
import { connect } from 'react-redux';
import { addBoard, getBoards } from '../../../../store/modules/boards/actions';
import { checkInputText, setFocusToElement, toggleClassElement } from '../../../../common/scripts/commonFunctions';
import { showErrText, toggleClassBody } from './functionsAddBoard';

type PropsType = {
  getBoards: any;
};

type StateType = { nameNewBoard: string };

class AddBoard extends React.Component<PropsType, StateType> {
  private isOpenPopap = false;

  constructor(props: PropsType) {
    super(props);
    this.state = {
      nameNewBoard: '',
    };

    this.closedPopap = this.closedPopap.bind(this);
    this.openPopap = this.openPopap.bind(this);
    this.addNewBoard = this.addNewBoard.bind(this);
  }

  componentDidMount(): void {
    document.addEventListener('click', (e) => {
      // @ts-ignore
      if (!this.isOpenPopap && e.target.classList.contains('add-board__popapp')) {
        this.closedPopap();
      }
    });
    document.addEventListener('keypress', (e) => {
      if (this.isOpenPopap && e.key === 'Enter') {
        e.preventDefault();
        this.addNewBoard();
      }
    });
  }

  handleInputChange = (e: { target: { value: string } }): void => {
    this.setState({ nameNewBoard: e.target.value });
  };

  closedPopap = (): void => {
    this.isOpenPopap = toggleClassElement('.add-board__popapp', 'display-none');
    toggleClassBody('overflowHidden');
    this.setState({ nameNewBoard: '' });
  };

  openPopap = (): void => {
    this.isOpenPopap = toggleClassElement('.add-board__popapp', 'display-none');
    toggleClassBody('overflowHidden');
    setFocusToElement('addNewBoardInpt');
  };

  // Check data input
  checkInputData = (): boolean => {
    const check = checkInputText(this.state.nameNewBoard);

    if (check.res === 0) {
      showErrText('add-board-error-text', 2000, 'Поле не может быть пустым.');
      return true;
    }

    if (check.res === 1) {
      setFocusToElement('addNewBoardInpt');
      showErrText('add-board-error-text', 4000, `Эти символы не допустимы: \n${check.errSymbols}`);
      return true;
    }

    return check.res !== -1;
  };

  addNewBoard = async (): Promise<void> => {
    if (this.checkInputData()) return;

    await addBoard(this.state.nameNewBoard);
    await this.props.getBoards();
    this.closedPopap();
  };

  render(): JSX.Element {
    return (
      <div className="add-board">
        <div className="add-board__popapp display-none">
          <div className="add-board__container">
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button className="add-board__close-btn" onClick={this.closedPopap} />
            <div className="add-board__input-container">
              <div id="add-board-error-text" className="add-board__errorHint" />
              <input
                id="addNewBoardInpt"
                type="text"
                value={this.state.nameNewBoard}
                onChange={this.handleInputChange}
              />
            </div>
            <button className="add-board__create-new-board" onClick={this.addNewBoard}>
              Создать доску
            </button>
          </div>
        </div>

        <button className="create-new-board-begin" onClick={this.openPopap}>
          + Создать доску
        </button>
      </div>
    );
  }
}

export default connect(null, { getBoards })(AddBoard);