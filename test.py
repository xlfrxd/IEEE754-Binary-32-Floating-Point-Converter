from pyscript import document # Import document (JS DOM)

def clicked_btn(event): # event -> not used but required for btn click handler
    output_div = document.querySelector('#output_click') # output div
    output_div.innerText = 'Button Clicked' # update 

def get_sum(event):
    output_div = document.querySelector('#output_sum') # output div

    # update with sum of first_input and second_input (both are text inputs)
    output_div.innerText = int(document.querySelector('#first_input').value) + int(document.querySelector('#second_input').value)
