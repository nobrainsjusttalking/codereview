import './Ticker.css';

const messages = [
  'Этим сайтом пользуется больше 30.000 человек каждый месяц',
  'Сайт был сделан джунами с нашего карьерного трека'
];

function Ticker() {
  const copies = 36;

  return (
    <div className='ticker'>
      <div className='ticker-track'>
        {Array(copies).fill(null).map((_, copyIndex) => (
          <div className='ticker-content' key={copyIndex} aria-hidden={copyIndex !== 0}>
            {messages.map((text, idx) => (
              <span key={`${copyIndex}-${idx}`} className='ticker-text'>{text}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ticker;