import styled from "styled-components";

const WeekWrapper = styled.div``;

const WeekHeader = styled.div`
  height: 44px;
  margin-bottom: 1em;
  position: relative;
  .title {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    text-transform: capitalize;
    color: ${props => props.theme.titleColor};
    line-height: 44px;
  }
  .next,.prev {
    position: absolute;
    top: 0;
    height: 44px;
    text-align: center;
    width: 44px;
    background: transparent;
    box-shadow: none;
    border: none;
  }
  .next {
    right: 0;
  }
  .prev {
    left: 0;
  }
`;

const WeekdaysWrapper = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  justify-content: space-between;
  margin-bottom: 15px;
  margin-top: 17px;
  li {
    padding: 6px;
    text-transform: capitalize;
    color: ${props => props.theme.weekdayColor};
    font-weight: bold;
    letter-spacing: 0.2px;
    line-height: 15px;
    text-align: center;
    font-size: 13px;
  }
`;

const DaysWrapper = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  justify-content: space-between;
  .day {
    outline: none;
    cursor: pointer;
    color: ${props => props.theme.dayColor};
    background: ${props => props.theme.dayBackground};
    font-weight: bold;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    text-align: center;
    padding: 0;
    width: 40px;
    max-width: 40px;
    border: none;
    box-shadow: none;
    position: relative;
    &.active {
      background: ${props => props.theme.daySelectedBackground};
      color: ${props => props.theme.daySelectedColor};
    }
  }
`;

export { WeekWrapper, WeekdaysWrapper, WeekHeader, DaysWrapper };
