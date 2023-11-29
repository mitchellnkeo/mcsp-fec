
//   // Create a state that will manage local data
//   // const [localData, setLocalData] = useState(0)
//   const [correctCount, setCorrectCount] = useState(0)
//   const [percentage, setPercentage] = useState(0)

//   const deckName = 'deckOne'
//   const sampleSize = 25
//   const roundedPercentage = Math.floor(percentage)

//   // Function to handle setting data in the local storage 
//   const handleSetData = () => {

//     // Increase correct count
//     setCorrectCount((prevCount) => {
//     const newCount = prevCount + 1
//     console.log(newCount)
//     return newCount
//   })

//     // Generate a unique key based on dynamic variable
//     const newKey = deckName

//     // Generate a new unique value based on dynamic variable
//     const newPercentage = ((correctCount + 1) / sampleSize) * 100

//     // Set the item into local storage and ensure that it's stringified
//     localStorage.setItem(newKey, JSON.stringify(newPercentage))
//     setPercentage(newPercentage)
//     // console.log(percentage)
//   }

//   // Handle clearing data
//   const handleClearData = () => {
//     localStorage.clear();
//     setPercentage(0); // Reset localData state after clearing
//     setCorrectCount(0)
//   };


//   <div>
//   <button onClick={handleSetData}>Correct Answer</button>
//   <button onClick={handleClearData}>Clear Data</button>
//   <p>{roundedPercentage}</p>
// </div>