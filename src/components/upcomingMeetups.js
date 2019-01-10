import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const query = graphql`
  {
    allMeetupEvent(
      filter: { status: { eq: "upcoming" } }
      sort: { fields: local_date }
      limit: 5
    ) {
      edges {
        node {
          id
          name
          description
          local_date
        }
      }
    }
  }
`

function UpcomingMeetups() {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <>
          <h1>Next 5 meetups</h1>
          {data.allMeetupEvent.edges.map(({ node }) => (
            <div>
              <h2>{node.name}</h2>
              <div dangerouslySetInnerHTML={{ __html: node.description }} />
              <time>{node.local_date}</time>
              <hr />
            </div>
          ))}
        </>
      )}
    />
  )
}

export default UpcomingMeetups
