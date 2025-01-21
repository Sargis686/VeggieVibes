

export default function ItemCard({ name, index, selectedIdx, setSelectedIdx, funFact }) {
    let verticalTranslateAmount;
    if (selectedIdx == null) {
      verticalTranslateAmount = String(index * 70);
    } else if (selectedIdx < index) {
      verticalTranslateAmount = String(index * 70 + 50);
    } else {
      verticalTranslateAmount = String(index * 70);
    }
    const horizontalTranslateAmount = String(index * 10);
  
    return (
      <button
        onClick={() => {
          setSelectedIdx(index);
        }}
        style={{
          top: `${verticalTranslateAmount}px`,
          left: `${horizontalTranslateAmount}px`,
        }}
        className={`overflow-y-scroll overflow-x-hidden transition-all flex flex-col justify-between card p-8 text-left w-3/4 h-32 absolute shadow-lg rounded-[40px] text-green-900 ${
          selectedIdx === index ? 'selected' : ''
        }`}
      >
        <h3 className="text-2xl md:text-3xl">{name}</h3>
        <p>{funFact}</p>
      </button>
    );
  }