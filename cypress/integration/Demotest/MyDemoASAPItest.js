 
describe('AS API TEST ', function() {
 
it('API validation', () => {

    cy.request ({

    method: 'GET', 
    url: 'https://api.bcv.social/api/v1/analytics/reporting-query/75?p_account_id=-2&p_start_date=2021-05-01&p_end_date=2021-05-31&p_number_of_months=6&p_metric_name=facebook_post_engagement&p_social_network_name=snname', 
    headers:{
         Authorization: 'Bearer MWM4OTY0MjRjMDY0Mjg2NmM2MjU4ODNlZGE0Mzg1YTE4Mzc1NmNmZmI1MmMyZWMzYjcyNDdhNjY5MTA4MDU0OQ'
         }
    }).then(function(response) {
        expect(response.status).to.eq(200)
        })
       
    })    

    })
      

   
