import React, { useEffect, useState } from 'react'
import { calculatePercentage, calculateTimeAgo } from '../../utils/functions'
import Action from '../action/action';
import ThumbUp from '../../assets/img/thumbs-up.svg'
import ThumbDown from '../../assets/img/thumbs-down.svg'
import './card-grid.css'
const MAX_NUMBER_CARACTERS_DESC = 80;
const MAX_NUMBER_CARACTERS_TITLE = 25;

export default function CardGrid({ personaje, view, saveVote }) {

    const [percentages, setPercentages] = useState(0)
    const [selectVote, setSelectVote] = useState('')
    const [voteComplete, setVoteComplete] = useState(false)
    const [timeAgo, setTimeAgo] = useState('');
    useEffect(() => {
        setPercentages(calculatePercentage(personaje.votes))
        setTimeAgo(calculateTimeAgo(personaje.lastUpdated))
    }, [personaje, saveVote])

    const getVote = (type) => {
        setSelectVote(type);
    }
    const confirmVote = (again) => {
        setVoteComplete(!voteComplete);
        setSelectVote('');
        if (!again) saveVote(personaje.name, selectVote === 'up');
    }
    return (
        <section className={view === 'list' ? 'card-grid-list' : 'card-grid'}>
            <img className='card-grid__background' src={require(`../../assets/people/${personaje.picture}`)} alt={personaje.name} />
            <section className='card-grid-body'>
                <span className={personaje.votes.positive === personaje.votes.negative ? 'card-grid__header--icon card-grid__header--hidden' : 'card-grid__header--icon card-grid__header--show'}>
                    <Action type={personaje.votes.positive > personaje.votes.negative ? 'up' : 'down'} />
                </span>
                <h1 className='card-grid__header--title'>{personaje.name.length > MAX_NUMBER_CARACTERS_TITLE && view === 'card-grid' ? `${personaje.name.substring(0, 15)}...` : personaje.name}</h1>
                <p className='card-grid__info--description'>{(personaje.description.length > MAX_NUMBER_CARACTERS_DESC) ? `${personaje.description.substring(0, MAX_NUMBER_CARACTERS_DESC)}...` : personaje.description}</p>
                <small className='card-grid__info--time'> {!voteComplete ? `${timeAgo} in ${personaje.category}` : `Thank you for your vote!`} </small>
                {
                    !voteComplete &&
                    <section aria-describedby={personaje.name} className='card-grid__action'>
                        <Action clickable={true} type='up' getVote={getVote} selectVote={selectVote} />
                        <Action clickable={true} type='down' getVote={getVote} selectVote={selectVote} />
                    </section>
                }
                <button disabled={(selectVote === '' && !voteComplete) && true} className='card-grid__action--vote' onClick={() => confirmVote(voteComplete)}>
                    {!voteComplete ? 'Vote Now' : 'Vote Again'}
                </button>
                <section className='card-grid__bar'>
                    <section className='card-grid__bar--positive' style={{ width: `${percentages.positive}%` }}></section>
                    <section className='card-grid__bar--negative' style={{ right: `0`, width: `${percentages.negative}%` }}></section>
                    <section className='card-grid__bar--numbers'>
                        <span>
                            <img src={ThumbUp} alt="Percentage Votes positive" />
                            <label>{percentages.positive}%</label>
                        </span>
                        <span>
                            <label>{percentages.negative}%</label>
                            <img src={ThumbDown} alt="Percentage Votes negative" />
                        </span>
                    </section>
                </section>
            </section>
        </section>
    )
}
