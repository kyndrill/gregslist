export const HousesView = `
<div class="container-fluid">
      <section class="row justify-content-center">
        <div class="col-12 col-md-8 p-4">
          <form onsubmit="app.HousesController.createHouse(event)">

            <div class="mb-2">
              <label for="name">House Title</label>
              <input id="name" type="text" required maxlength="100" name="name" placeholder="Cozy Bungalow">
            </div>

            <div class="mb-2">
              <label for="year">Year Built</label>
              <input id="year" type="number" required min="1600" max="2023" placeholder="2020" name="year">
            </div>

            <div class="mb-2">
              <label for="price">Price</label>
              <input id="price" type="number" required min="100" max="1000000000" placeholder="400,000" name="price">
            </div>

            <div class="mb-2">
              <label for="location">Location</label>
              <input id="location" type="text" required maxlength="80" name="location" placeholder="New York, New York">
            </div>

            <div class="my-4 d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <label for="bedrooms" class="me-2">Bedrooms</label>
                <input id="bedrooms" type="number" required min="1" max="20" name="bedrooms" placeholder="2"
                  class="rooms-input">
              </div>
              <div class="d-flex align-items-center">
                <label for="bathrooms" class="me-2">Bathrooms</label>
                <input id="bathrooms" type="number" required min="1" max="10" name="bathrooms" placeholder="1"
                  class="rooms-input">
              </div>
              <div class="d-flex align-items-center">
                <label for="sqft" class="me-2">Square Footage</label>
                <input id="sqft" type="number" required min="100" max="1000000" placeholder="20,000" name="sqft"
                  class="rooms-input">
              </div>
            </div>

            <div class="mb-2 d-flex justify-content-between align-items-center">
              <p class="mb-3">Please add a check if the house has the following things:</p>
              <div class="text-center">
                <label for="hasGarage">Garage</label>
                <input class="checkbox" id="hasGarage" type="checkbox" name="hasGarage">
              </div>
              <div class="text-center">
                <label for="hasBasenent">Basement</label>
                <input class="checkbox" id="hasBasement" type="checkbox" name="hasBasement">
              </div>
              <div class="text-center">
                <label for="hasHoA">HOA</label>
                <input class="checkbox" id="hasHoA" type="checkbox" name="hasHoA">
              </div>
            </div>


            <div class="mb-2">
              <label for="imgUrl">Image URL</label>
              <input id="imgUrl" type="url" required maxlength="400" name="imgUrl" placeholder="House ImgUrl...">
            </div>

            <div class="mb-2">
              <label for="description">Description</label>
              <textarea name="description" id="description" rows="5" placeholder="House Description..."
                maxlength="300"></textarea>
            </div>

            <div>
            <button class="btn btn-success" type="submit">Submit</button>
          </div>
          </form>

            </section>
            </div>

<div class="container-fluid">
<section id="house" class="row house-font">
  <div class="col-3 m-5 house-card shadow fw-bold">
    <div class="m-3">
      <img
        src="https://plus.unsplash.com/premium_photo-1663099373746-703d6504d265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80"
        alt="house picture" class="house-img">
    </div>
    <p class="text-center fs-4 mb-2">Cozy Bungalow</p>
    <div class="d-flex justify-content-between">
      <div class="p-1">
        <p>Built in: 1983</p>
        <p>Bedrooms: 2</p>
        <p>Bathrooms: 1</p>
      </div>
      <div class="house-small-box p-1">
        <p>Garage: No</p>
        <p>Basement: No</p>
        <p>HOA: No</p>
      </div>
    </div>
    <div class="mt-2">
      <p>Square Footage: 1200 feet</p>
      <p>Price: $400000</p>
      <p>Location: Ashland, Oregon</p>
      <p>Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia expedita harum dolorem quis
        quasi
        adipisci facere, magni ex at illum!</p>
    </div>
  </div>
</section>
</div>`