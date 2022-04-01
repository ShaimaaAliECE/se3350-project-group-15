import left_arrow from '../assets/svg/left-arrow.svg';
import right_arrow from '../assets/svg/right-arrow.svg';

export default function Footer(props) {

    const mergeSortDict = {
        1: [
            "Welcome to the Merge Sort Algorithm! Press start to begin.",
            "A random unsorted list of ten numbers are generated, the following are the procedure of Merge Sorting",
            "1. Slice the entire Array into half and create two subsets of the original set",
            "2. Repeat the same process and create more subsets",
            "3. Until all numbers are stand alone subsets, the slicing of the number set will then stop.",
            "4. Now, it's time to sort out the number set in order from minimum to maximum from left to right",
            "5. Select first two subset from the left and compare which number is smaller, and you should merge these two subsets into one set",
            "6. Remember you should always put smaller number on the left side",
            "7. Continue the sorting and merging steps for the rest of the subsets, and finally merge all the subsets back into one sorted number set",
            "8. Congratulations, you have learnt Merge Sort Algorithm!"
        ],
        2: [
            "Welcome to the Merge Sort Algorithm! Press start to begin.",
            "1. Read the number list and split the list into two subsets.",
            "2. Fill the blank with the same order as present in the first row.",
            "3. Split each of the new subsets into another two subsets.",
            "4. Repeat the same steps until all numbers has been evenly separated ans stand alone.",
            "5. Now, it's time to re-arrange the order of the number listed",
            "6. First, select the first two subset from the left side of the left subset and compare their value.",
            "7. Place the smaller number of the left side and merge them into one number set with two number in it.",
            "8. Then, repeat the previous step to rest of the subset until only one large set contains all number is formed.",
            "9. Congratulation, you have merge sorted a list!"
        ],
        3: [
            "Hope you learned the Merge Sort Algorithm! Press start to begin.",
            "You are on your own now, good lucky!"
        ],
        4: [
            "Hope you learned the Merge Sort Algorithm! Press start to begin.",
            "You are on your own now, good lucky!"
        ],
        5: [
            "Hope you learned the Merge Sort Algorithm! Press start to begin.",
            "You are on your own now, good lucky!"
        ],
        6: ["Welcome to the Merge Sort Algorithm! Press start to begin.",
            "A random unsorted list of five to eight numbers are generated, the following are the procedure of Merge Sorting.",
            "You are on your own now, good lucky!"
        ]

    };

    const bubbleSortDict = {
        1: [
            "Welcome to the Bubble Sort Algorithm! Press start to begin.",
            "A random unsorted list of ten numbers are generated, the following are the procedure of Merge Sorting",
            "Repeatedly swapping the adjacent elements if they are in wrong order."
        ],
        2: [
            "Welcome to the Bubble Sort Algorithm! Press start to begin.",
            "Repeatedly swapping the adjacent elements if they are in wrong order."
        ],
        3: [
            "Hope you learned the Bubble Sort Algorithm! Press start to begin.",
            "You are on your own now, good lucky!"
        ],
        4: [
            "Hope you learned the Bubble Sort Algorithm! Press start to begin.",
            "You are on your own now, good lucky!"
        ],
        5: [
            "Hope you learned the Bubble Sort Algorithm! Press start to begin.",
            "You are on your own now, good lucky!"
        ],
        6: [
            "Welcome to the Bubble Sort Algorithm! Press start to begin.",
            "A random unsorted list of five to eight numbers are generated, the following are the procedure of Bubble Sort.",
            "You are on your own now, good lucky!"
        ]
    }

    const InstructionHelper = (currentAlgorithm, currentLevel, currentStep) => {
        let selectedDictionary = [];
        switch (currentAlgorithm) {
            case 'ms':
                selectedDictionary = mergeSortDict;
                break;
            case 'bs':
                selectedDictionary = bubbleSortDict;
                break;
            default:
                selectedDictionary = mergeSortDict;
        }

        let validIndex = 0;
        while (selectedDictionary[currentLevel][validIndex + 1] !== undefined) {
            validIndex++;
        }

        if (currentStep <= validIndex) {
            return selectedDictionary[currentLevel][currentStep];
        }
        return selectedDictionary[currentLevel][validIndex];
    }

    return (
        <div className="footer-container">
            <div className="footer-body">
                <div className="footer-navigator">
                    <div
                        className={`footer-navigator-button ${props.canPrev ? "" : "disabled"
                            }`}
                        onClick={props.canPrev ? props?.onPrevStep : () => { }}
                    >
                        <img
                            src={left_arrow}
                            alt="left-arrow"
                        />
                    </div>
                    <div
                        className={`footer-navigator-button ${props.canNext ? "" : "disabled"
                            }`}
                        onClick={props.canNext ? props?.onNextStep : () => { }}
                    >
                        <img
                            src={right_arrow}
                            alt="right-arrow"
                        />
                    </div>
                </div>
                <div className="footer-tips">
                    <p className="footer-tips-title">Steps:</p>
                    <div className="footer-tips-content">
                        <p>{InstructionHelper(localStorage.getItem("selectedAlgorithm"), props.currentLevel, props.currentStep)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


