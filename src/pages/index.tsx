import { useState } from 'react';
import { useWizard } from 'use-wizard';

import { mergeSortIterator } from '@/utils';
import Header from '@/components/Header';
import Content from '@/components/Content';
import Footer from '@/components/Footer';
import FunctionalArea from '@/components/FunctionalArea';

import './index.less';
import Square from '@/components/Square';

const originalData = [9, 10, 1, 19, 12, 18, 8, 7, 16, 6];

export default function IndexPage() {
  const [originalArray, setOriginalArray] = useState<number[]>([]);
  const [summaryArray, setSummaryArray] = useState<number[][][]>([]);
  const [step, wizard] = useWizard();

  const handleRunning = () => {
    setOriginalArray(originalData);
    const innerSummaryArray: number[][][] = [];
    const generator = mergeSortIterator(originalData);
    do {
      const result = generator.next();
      if (result.value && result.value.length > 0) {
        innerSummaryArray.push(result.value);
      }
      if (result.done) {
        break;
      }
    } while (1);
    setSummaryArray(innerSummaryArray);
  };
  const handleRestarting = () => {
    wizard.initialize();
    setOriginalArray([]);
    setSummaryArray([]);
  };
  const handlePrevStep = () => {
    wizard.previousStep();
  };
  const handleNextStep = () => {
    if (step <= summaryArray.length) {
      wizard.nextStep();
    }
  };

  const displayArray = summaryArray.slice(0, (step as number) - 1);

  return (
    <div>
      <Header />
      <Content>
        <FunctionalArea
          hasStarted={summaryArray.length > 0}
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
          </div>
        </div>
      </Content>
      <Footer
        canPrev={step > 1}
        canNext={step <= summaryArray.length}
        onPrevStep={handlePrevStep}
        onNextStep={handleNextStep}
      />
    </div>
  );
}
