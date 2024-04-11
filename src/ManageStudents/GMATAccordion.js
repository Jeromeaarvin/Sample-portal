import React from 'react';
import './ManageStudentsPage.css'


const GMATAccordion = ({ academicData, handleToggleGmat, handleAcademicChange, isExpandedGmat }) => {
  return (
    <div className='accordian-info-2'>
      <div className='Accordian' onClick={handleToggleGmat} style={{ cursor: 'pointer' }}>
        <h2>GMAT</h2><h2>+</h2>
      </div>
      {isExpandedGmat && (
        <div className='Accordian-div'>
          <div className='a-sec-1'>
            <div className='DOB'>
              <p>Overall score*</p>
              <input
                type="text"
                value={academicData.gmatOverallScore}
                onChange={handleAcademicChange}
                placeholder='Overall score' />
            </div>

            <div className='DOB'>
              <p>Date of Examination</p>
              <input
                type="text"
                value={academicData.gmatDateOfExam}
                onChange={handleAcademicChange}
                placeholder='Date of Examination' />
            </div>
          </div>
          <div className='a-sec-1'>
            <div className='DOB'>
              <p>Quantitative*</p>
              <input
                type="text"
                value={academicData.gmatQuantitative}
                onChange={handleAcademicChange}
                placeholder='Q:' />
            </div>
            <div className='DOB'>
              <p>Verbal*</p>
              <input
                type="text"
                value={academicData.gmatVerbal}
                onChange={handleAcademicChange}
                placeholder='V:' />
            </div>
            <div className='DOB'>
              <p>Analytical Writing*</p>
              <input
                type="text"
                value={academicData.gmatWriting}
                onChange={handleAcademicChange}
                placeholder='AW:' />
            </div>
            <div className='DOB'>
              <p>Integrated Reasoning*</p>
              <input
                type="text"
                value={academicData.gmatReasoning}
                onChange={handleAcademicChange}
                placeholder='RR:' />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GMATAccordion;
