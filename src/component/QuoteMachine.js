import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardContent';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Typography from '@material-ui/core/Typography'; 
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {withStyles} from '@material-ui/core/styles'; 

const styles = theme=>({
    button: {
       
        //backgroundColor:"purple",
        padding: "8px 18px 6px 18px",
        marginTop:"0",
        marginLeft:"25em",
      
    }
        
       
  });
  
  
const QuoteMachine =({selectedQuote,assignNewQuoteIndex,getRandomColor,classes,newColor})=>(  
    
    <Card>
        
            <CardContent style={{
                marginTop:"40px",
                marginLeft: "80px",
                marginRight: "80px",
            }}>
               
                <Typography id="text">
                
                    <span style={{
                        display:"flex",
                        justifyContent:"center",
                        textAlign:"center",
                        height: "auto",
                        color:newColor(),
                        fontFamily: 'Cabin',
                        fontWeight: "500",
                        fontSize:"2em",
                  
                    }}><i className="fa fa-quote-left" style={{
                        fontSize:"1em",
                        marginTop:"0.3em",
                      float:"right",
                      
                    }}></i>{selectedQuote.quote}</span><br /><span style={{
                        fontFamily: 'Fira Sans',
                        textAlign: "right",
                        display: "block",
                        
                        color:newColor(), }} id="author">- {selectedQuote.author}</span>
                </Typography>
               
            </CardContent>
            <CardActions style={{
                marginLeft: "2em",
            }}>
                <span style={{
             
                }}>
            <IconButton id="tweet-quote"
                    target="_blank"
                    href={`https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hastags=akhilmachine`}
                    >
                    <FontAwesomeIcon style={{ color: newColor(), }} icon={faTwitter} size="md"></FontAwesomeIcon>
                </IconButton>
                   
                    <Media query="(max-width:28.75em)">  
                    <Button className={classes.margin} variant="contained" size="small" id="new-quote" style={{
                    color: "white",  
                    backgroundColor: newColor(),              
                
         //padding: "6px 18px 6px 18px",
     

         marginBottom: "50",
         marginLeft:"25em",
    }} onClick={ (e) => {
    assignNewQuoteIndex();
    getRandomColor();
  }}>Next Quote</Button>
                    </Media>
 <Media query="(max-width:100em)">  
                <Button className={classes.margin} variant="contained" size="small" id="new-quote" style={{
                    color: "white",  
                    backgroundColor: newColor(),              
                
         //padding: "6px 18px 6px 18px",
     

         marginBottom: "50",
         marginLeft:"25em",
    }} onClick={ (e) => {
    assignNewQuoteIndex();
    getRandomColor();
  }}>Next Quote</Button>
  </Media> 
              
  </span>

              
            </CardActions>
           
    </Card>

    
)


export default withStyles(styles)(QuoteMachine);
