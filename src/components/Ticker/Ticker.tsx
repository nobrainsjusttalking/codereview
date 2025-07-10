import './Ticker.css';

const messages = [
  'Этим сайтом пользуется больше 30.000 человек каждый месяц',
  'Сайт был сделан джунами с нашего карьерного трека'
];

function Ticker() {
  const copies = 36;

  return (
    <div className='flex items-center overflow-hidden w-full select-none bg-ticker'>
      <div className='ticker-scroll-animation flex'>
        {Array(copies).fill(null).map((_, copyIndex) => (
          <div className='flex py-[12px]' key={copyIndex} aria-hidden={copyIndex !== 0}>
            {messages.map((text, idx) => (
              <span key={`${copyIndex}-${idx}`} 
                className='whitespace-nowrap shrink-0 text-[14px]/[16px] font-medium tracking-[-0.5px] text-[#232325] font-wix-text before-text-icon'>
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ticker;