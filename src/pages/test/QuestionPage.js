import React from 'react';
import AnswerBtn from '../../element/test/AnswerBtn';
import QImage from '../../element/test/QImage';
import Question from '../../element/test/Question';

const QuestionPage = () => {
    return (
        <div>
            <QImage />
            <Question></Question>
            <AnswerBtn></AnswerBtn>
        </div>
    );
};

export default QuestionPage;