# React weekstrip daypicker
A day picker in a week based calendar for react. Support both week and working week format.


## Installation
`npm install react-weekstrip-daypicker --save`

### Usage

```
import React from 'react';
import WeekStrip from 'react-weekstrip-daypicker';
 
class Component extends React.Component {

  render() {
    return <WeekStrip />;
  }
}
```

### Properties

#### workingWeek
Boolean, set to true for working week (Monday - Friday).  
Defalut: `false`

#### locale
String rapresenting the lang localization.  
Default: `en`

#### theme
Object with the color to style the component.
Default:
```
{
    titleColor: "#000",
    dayColor: "#222222",
    dayBackground: "transparent",
    weekdayColor: "#aaaaaa",
    daySelectedColor: "#fff",
    daySelectedBackground: "#3434ff",
}
``` 

#### initDay
Either string, Date or a moment object(https://momentjs.com). Set the initial view and the initial selected date. Put null to select current day.  
Defult: `null` (current day).

#### onChange
Function called when the user selects a day. Day passed as param in moment format (https://momentjs.com).

#### onWeekChange
Function called when the user changes the week. Starting day of the week passed as param in moment format (https://momentjs.com).
