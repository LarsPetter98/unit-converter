export const html = /*html*/`
<header>
  <a href="">
    <h1>Unit Converter</h1>
  </a>
</header>
<main>
  <h3>Unit Converter Express Version</h3>
  <form>
    <div class="menu">
      <div class="length btn">Length</div>
      <div class="temperature btn">Temperature</div>
      <div class="weight btn">Weight</div>
      <div class="volume btn">Volume</div>
      <div class="area btn">Area</div>
      <div class="time btn">Time</div>
    </div>
    <div class="form-inner">
      <div class="form-container-1">
        <label for="">From:</label>
        <input class="input-from" type="text" />
        <select class="from" size="11">
          <option class="option-from" value="">Meter</option>
          <option class="option-from" value="*1000">Kilometer</option>
          <option class="option-from" value="/100">Centimeter</option>
          <option class="option-from" value="/1000">Millimeter</option>
          <option class="option-from" value="/1000000">Micrometer</option>
          <option class="option-from" value="/1000000000">Nanometer</option>
          <option class="option-from" value="*1609.344">Mile</option>
          <option class="option-from" value="*0.9144">Yard</option>
          <option class="option-from" value="*0.3048">Foot</option>
          <option class="option-from" value="*0.0254">Inch</option>
          <option class="option-from" value="/0.00000000000000010570">Lightyear</option>
          <option class="option-from"></option>
          <option class="option-from"></option>
          <option class="option-from"></option>
          <option class="option-from"></option>
          <option class="option-from"></option>
          <option class="option-from"></option>
          <option class="option-from"></option>
          <option class="option-from"></option>
          <option class="option-from"></option>
          <option class="option-from"></option>
          <option class="option-from"></option>
          <option class="option-from"></option>
        </select>
      </div>
      <div class="form-container-2">
        <label for="">To:</label>
        <input class="input-to" type="text" />
        <select class="to" size="11">
          <option class="option-to" value="">Meter</option>
          <option class="option-to" value="/1000">Kilometer</option>
          <option class="option-to" value="*100">Centimeter</option>
          <option class="option-to" value="*1000">Millimeter</option>
          <option class="option-to" value="*1000000">Micrometer</option>
          <option class="option-to" value="*1000000000">Nanometer</option>
          <option class="option-to" value="/1609.344">Mile</option>
          <option class="option-to" value="/0.9144">Yard</option>
          <option class="option-to" value="/0.3048">Foot</option>
          <option class="option-to" value="/0.0254">Inch</option>
          <option class="option-to" value="*0.00000000000000010570">Lightyear</option>
          <option class="option-to"></option>
          <option class="option-to"></option>
          <option class="option-to"></option>
          <option class="option-to"></option>
          <option class="option-to"></option>
          <option class="option-to"></option>
          <option class="option-to"></option>
          <option class="option-to"></option>
          <option class="option-to"></option>
          <option class="option-to"></option>
          <option class="option-to"></option>
          <option class="option-to"></option>
        </select>
      </div>
    </div>
  </form>
  <p class="result">Result:</p>
</main>`