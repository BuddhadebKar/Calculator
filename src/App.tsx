import { useState } from 'react';
import background from '../src/assets/eren-and-mikasa-last-memories.1920x1080.mp4'

function App() {

  const numbers: string[] = ['7', '8', '9', '÷', '4', '5', '6', '×', '1', '2', '3', '-', '0', '.', '=', '+'];
  const [cardValue, setcardValue] = useState<string>("");

  const handleCard = (value: string) => {

    if (value === "=") {
      try {
        const sanitizedExpression = cardValue.replace("÷", "/").replace("×", "*");
        const result = eval(sanitizedExpression);
        console.log(result);

        setcardValue(result.toString());
      } catch (error) {
        setcardValue("Error");
      }
    }
    else if (value === "clr") {
      setcardValue(((prev) => prev.slice(0, -1)));
    }
    else if (value === "clrAll") {
      setcardValue("");
    }
    else {
      if (cardValue === "Error") {
        setcardValue("");
      }
      setcardValue(((prev) => prev + value));
    }

  }

  return (
    <main className='relative h-screen w-full'>
      <video
        className='absolute top-0 left-0 h-full w-full object-cover '
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={background} type="video/mp4" />

      </video>
      <div className="absolute inset-0 flex items-center justify-center ">
        <div className=' bg-black bg-opacity-70 rounded-lg p-5'>

          {/* display area*/}
          <div className='bg-white h-12 px-4 mb-5'> {cardValue !== "" ? cardValue : "Click a number"}
          </div>
          <hr className='mb-3' />
          {/* button area */}
          <div className="grid grid-cols-4 gap-3">
            {numbers.map((value, index) => (
              <div key={index} className='bg-gray-200  rounded-xl hover:bg-gray-300 transition transform hover:scale-105 cursor-pointer'
                onClick={() => {
                  handleCard(value);
                }}>
                <h1 className='flex justify-center font-bold text-2xl'>{value}</h1>
              </div>
            ))}
          </div>
          <div className='flex gap-4 mt-4 justify-between'>
            <button className='bg-green-300 text-2xl font-bold rounded-lg px-4' onClick={() => {
              handleCard("clr");
            }}>Clr</button>
            <button className='bg-green-300 text-2xl font-bold rounded-lg px-2 ' onClick={() => {
              handleCard("clrAll");
            }}>Clear All</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
