import { useState } from 'react';
import './formPractice.css';

const data = { 
    title: ["Form Practice"],
    questions: {}

};

const FormPractice = () => {

    return (
        <div className="form-practice-container">
            <form>
                <label>
                    <input />
                </label>

                <label>
                    <input />
                </label>

                <select>
                    <option></option>
                </select>
            </form>
        </div>
    );
}

export default FormPractice;