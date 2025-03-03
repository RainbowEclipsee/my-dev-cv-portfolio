const Contacts: React.FC = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Saint Petersburg, Russia</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram</h2>
            <p>
              <a href="tel:+79051234567">+7 (915) 839-04-90</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:makarchuk-bogdan@yandex.ru">
                makarchuk-bogdan@yandex.ru
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Contacts
