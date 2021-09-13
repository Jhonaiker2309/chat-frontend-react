import React from 'react'

export default function UsersInChat({users}) {
    return (
        <div>
            Users:{users.map((user, i) => <span key={i}>{i > 0 ? <span>,</span>: null} {user.name}</span>)}
        </div>
    )
}
