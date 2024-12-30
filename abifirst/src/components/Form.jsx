function Form(){
    return(
    <div className="slam-book-container">
        <form>
            <fieldset>
                <legend>SLAM BOOK</legend>
                <div>
                    <label>Friend's Name:</label>
                    <input type="text" id="friendName" name="friendName" placeholder="Enter your friend's name"/>
                </div>
                <div>
                    <label>Nickname:</label>
                    <input type="text" id="nickname" name="nickname" placeholder="Enter your nickname"/>
                </div>
                <div>
                    <label>Gender:</label>
                    <div className="inline-group">
                        <input type="radio" id="male" name="gender" value="male"/>
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="female" name="gender" value="female"/>
                        <label htmlFor="female">Female</label>
                    </div>
                </div>
                <div>
                    <label>Mobile:</label>
                    <input type="text" id="mobile" name="mobile" placeholder="Enter your mobile"/>
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" id="address" name="address" placeholder="Enter your address"/>
                </div>
                <div>
                    <label>School Name:</label>
                    <select id="schoolName" name="schoolName">
                        <option value="">Select your school</option>
                        <option value="school1">A school</option>
                        <option value="school2">B school</option>
                        <option value="school3">C school</option>
                    </select>
                </div>
                <div>
                    <label>Memories about yourself:</label>
                    <textarea id="memories" name="memories" placeholder="Share your memories"></textarea>
                </div>
                <div>
                    <label>Favourite Actors:</label>
                    <div className="inline-group">
                        <input type="checkbox" id="actor1" name="favoriteActors" value="actor1"/>
                        <label htmlFor="actor1">Vijay</label>
                        <input type="checkbox" id="actor2" name="favoriteActors" value="actor2"/>
                        <label htmlFor="actor2">Ajith</label>
                        <input type="checkbox" id="actor3" name="favoriteActors" value="actor3"/>
                        <label htmlFor="actor3">Surya</label>
                    </div>
                </div>
            </fieldset>
            <div>
                <h1></h1>
                <center>
                <button type="submit">Submit</button>
                </center>
            </div>
        </form>
    </div>
    )
}
export default Form