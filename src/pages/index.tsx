import { useEffect, useState } from 'react';
import { useWizard } from 'use-wizard';

import { mergeSortIterator, sort} from '@/utils';
import Header from '@/components/Header';
import Content from '@/components/Content';
import Footer from '@/components/Footer';
import FunctionalArea from '@/components/FunctionalArea';

import './index.less';
import Square from '@/components/Square';

const originalData = [8,7,5,4,3,2,8,9,12,134,67];

export default function IndexPage() {
  const [originalArray, setOriginalArray] = useState<number[]>([]);
  const [summaryArray, setSummaryArray] = useState<number[][][]>([]);
  const [summaryCodeArray, setSummaryCodeArray] = useState<string[]>([]);
  const [step, wizard] = useWizard();


  const handleRunning = () => {
    const a = sort(originalData,[],true)
    a.step.forEach((item,index)=>{
      console.log('Step Data',index,'>>>',item)
    })
    setSummaryCodeArray(a.step);
  };
  const handleRestarting = () => {
    wizard.initialize();
    setSummaryCodeArray([]);
  };
  const handlePrevStep = () => {
    wizard.previousStep();
  };
  const handleNextStep = () => {
    if (step <= summaryCodeArray.length) {
      wizard.nextStep();
    }
  };

  const displayArray = summaryArray.slice(0, (step as number) - 1);
  console.log('displayArray',displayArray)

  const displayCode = summaryCodeArray[(step as number) - 1];
  var displayCodeArray : number[][][] = []
  if (displayCode){
    displayCodeArray = displayCode.split('&').map((step=>{
      return step.split('|').map(array=>{
         return array.split(',').map(code=> Number(code))
      })
    }))
    console.log('displayArrayCode',displayCode,displayCodeArray)
  }
  return (
    <div>
      <Header />
      <Content>
        <FunctionalArea
          hasStarted={summaryCodeArray.length > 0}
          onStart={handleRunning}
          onRestart={handleRestarting}
        />
        <div className="display-area">
          <div className="display-area-row">
            <div className="display-area-col"></div>
            {originalArray.map((item, i) => (
              <Square key={i}>{item}</Square>
            ))}
          </div>
          <div className="display-area-dynamic">
            {displayArray.map((item, i) => (
              <div className="display-area-row" key={i}>
                <Square opacity />
                {item.map((subItem, j) => (
                  <div className="display-area-col" key={j}>
                    {j === item.length / 2 && <Square opacity />}
                    {subItem.map((num, k) => (
                      <Square key={k}>{num}</Square>
                    ))}
                    <Square opacity />
                  </div>
                ))}
              </div>
            ))}
            {displayCodeArray.map((item, i) => (
              <div className="display-area-row" key={i}>
                <Square opacity />
                {item.map((subItem, j) => (
                  <div className="display-area-col" key={j}>
                    {j === item.length / 2 && <Square opacity />}
                    {/* {i > 0 && j == 1 && ((new Array(i).fill(0)).map(s=>(<Square opacity />)))} */}
                    {subItem.map((num, k) => (
                      <Square key={k} back={num < 0 ? '#73b369' : ''} color={num < 0 ? '#73b369' : ''}>{num}</Square>
                    ))}
                    <Square opacity />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Content>
      <Footer
        canPrev={step > 1}
        canNext={step < summaryCodeArray.length }
        onPrevStep={handlePrevStep}
        onNextStep={handleNextStep}
      />
    </div>
  );
}
