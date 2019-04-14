import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { WeekWrapper, WeekdaysWrapper, WeekHeader, DaysWrapper } from "./styles";

class WeekDaypicker extends React.Component {
    constructor(props) {
        super(props);
        const { initDay } = props;
        const startDate = initDay ? moment(initDay) : moment();
        if (startDate.day() !== 1) {
            // if not monday
            if (startDate.day() === 0) {
                // if sunday have to take monday before
                startDate.day(-6);
            }
            startDate.day(1); // take last monday
        }

        this.onNextClick = this.onNextClick.bind(this);
        this.onPrevClick = this.onPrevClick.bind(this);

        this.state = {
            startDate,
            selectedDate: initDay || moment()
        };
    }

    onDateClick(selectedDate) {
        const { onChange } = this.props;
        this.setState(
            {
                selectedDate
            },
            () => {
                onChange(selectedDate);
            }
        );
    }

    onNextClick() {
        const { startDate } = this.state;
        const { onWeekChange } = this.props;
        this.setState({
            startDate: startDate.add(7, "d")
        }, () => {
            onWeekChange(startDate)
        });
    }

    onPrevClick() {
        const { startDate } = this.state;
        const { onWeekChange } = this.props;
        this.setState({
            startDate: startDate.subtract(7, "d")
        }, () => {
            onWeekChange(startDate)
        });
    }

    renderWeekDays() {
        const { locale, workingWeek } = this.props;
        const days = [];
        const m = moment().locale(locale);
        for (let i = 1; i < (workingWeek ? 6 : 8); i += 1) {
            days.push(<li key={`weekday-${i % 7}`}>{m.day(i % 7).format("ddd")}</li>);
        }
        return days;
    }

    renderDays() {
        const { workingWeek } = this.props;
        const { startDate, selectedDate } = this.state;
        const days = [];
        for (let i = 0; i < (workingWeek ? 5 : 7); i += 1) {
            const date = startDate.clone().add(i, "d");
            days.push(
                <button
                    type="button"
                    key={`day-${i}`}
                    className={`day ${date.isSame(selectedDate, "d") ? "active" : ""}`}
                    onClick={() => {
                        this.onDateClick(date);
                    }}
                >
                    {date.format("DD")}
                </button>
            );
        }
        return days;
    }

    render() {
        const { startDate } = this.state;
        const { locale, workingWeek, theme } = this.props;
        startDate.locale(locale);
        const endDate = startDate.clone().day(workingWeek ? 5 : 7);
        return (
            <WeekWrapper theme={theme}>
                <WeekHeader theme={theme}>
                    <button type="button" className="prev" onClick={this.onPrevClick}>
                        Prev
                    </button>
                    <button type="button" className="next" onClick={this.onNextClick}>
                        Next
                    </button>
                    <p className="title">{`${startDate.format(
                        "MMM DD"
                    )} - ${endDate.format("MMM DD")}`}</p>
                </WeekHeader>
                <WeekdaysWrapper theme={theme}>{this.renderWeekDays()}</WeekdaysWrapper>
                <DaysWrapper theme={theme}>{this.renderDays()}</DaysWrapper>
            </WeekWrapper>
        );
    }
}

WeekDaypicker.propTypes = {
    workingWeek: PropTypes.bool,
    locale: PropTypes.string,
    onChange: PropTypes.func,
    onWeekChange: PropTypes.func,
    initDay: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(moment),
        PropTypes.instanceOf(Date)
    ]),
    theme: PropTypes.shape({
        dayColor: PropTypes.string,
        dayBackground: PropTypes.string,
        weekdayColor: PropTypes.string,
        daySelectedColor: PropTypes.string,
        daySelectedBackground: PropTypes.string,
    }),
};

WeekDaypicker.defaultProps = {
    workingWeek: false,
    locale: "en",
    theme: {
        titleColor: "#000",
        dayColor: "#222222",
        dayBackground: "transparent",
        weekdayColor: "#aaaaaa",
        daySelectedColor: "#fff",
        daySelectedBackground: "#3434ff",
    },
    onChange: () => {},
    initDay: null,
    markedDays: [],
    onWeekChange: () => {},
};

export default WeekDaypicker;