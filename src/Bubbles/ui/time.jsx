import React, {useRef, useState, useEffect} from 'react'
import Moment from 'react-moment';
import moment from 'moment'



export const Timer = () => {
    const [timerDays, setTimerDays] = useState('14');
    const [timerHours , setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef()

    const startTimer = () => {
        const countdownDate = moment().add(14, 'days')
        console.log(countdownDate)

        interval = setInterval(() => {
            const now = moment()
            const distance = countdownDate - now;

            const days = Math.floor(distance /(1000 * 60 * 60 *24))
            const hours = Math.floor((distance % (1000 * 60 * 60 *24)/ (1000 *60 *60)))
            const minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 *60))
            const seconds = Math.floor((distance % (1000 * 60 )) / 1000)

            if (distance < 0){
                clearInterval(interval.current)
            } else {
            setTimerDays(days)
            setTimerHours(hours)
            setTimerMinutes(minutes)
            setTimerSeconds(seconds)
            }
        },1000)
    }

    useEffect(() => {
        startTimer();
        return() => {
            clearInterval(interval.current)
        }
    })

    return (
        <div>
            <p>{timerDays}days:</p>
            <p>{timerHours}hours:</p>
            <p>{timerMinutes}minutes:</p>
            <p>{timerSeconds}seconds</p>

        </div>
    )
}

export default Timer