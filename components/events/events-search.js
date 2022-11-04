import Button from "../ui/button";
import classes from "../events/events-search.module.css";
import {useRef} from "react";



function EventsSearch(props) {

    const yearInput = useRef();
    const monthInput = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const selectedYear = yearInput.current.valueOf().value;
        const selectedMonth = monthInput.current.valueOf().value;

        props.onSearch(selectedYear, selectedMonth);
    }



    return <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
            <div className={classes.control}>
                <label htmlFor='year'>
                    Year
                </label>
                <select id='year' ref={yearInput}>
                    <option value={2021}> 2021</option>
                    <option value={2022}> 2022</option>
                </select>
            </div>
            <div className={classes.control}>
                <lable htmlFor='month'> Month</lable>
                <select id='month' ref={monthInput}>
                    <option value={1}> Thang 1</option>
                    <option value={2}> Thang 2</option>
                    <option value={3}> Thang 3</option>
                    <option value={4}> Thang 4</option>
                    <option value={5}> Thang 5</option>
                    <option value={6}> Thang 6</option>
                    <option value={7}> Thang 7</option>
                    <option value={8}> Thang 8</option>
                    <option value={9}> Thang 9</option>
                    <option value={10}> Thang 10</option>
                    <option value={11}> Thang 11</option>
                    <option value={12}> Thang 12</option>
                </select>
            </div>
        </div>

        <Button> Find Event</Button>
    </form>
}


export default EventsSearch;