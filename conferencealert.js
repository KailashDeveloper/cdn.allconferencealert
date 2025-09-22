$(function () {
	$('#loginForm').submit(function (e) {
		e.preventDefault();
		var form = $(this);
		var post_data = form.serialize();
		var post_url = form.attr('action');
		if (validate_login()) { $('#log_load').html("<img src='images/loading.gif' width='32' height='32' />"); $.ajax({ type: "POST", url: post_url, data: post_data, success: function (msg) { $('#log_load').html(msg); } }); }
		else { alert('Enter Valid Userd Login'); $('#log_load').html("Enter Valid Userd Login"); }
	});
}); function validate_login() { return true; }
function error_login() { $('#log_load').html('Invald Id OR Password'); }
function success_login(page) { window.location = page; }

$(function () {
	$('#loginForm_mobile').submit(function (e) {
		e.preventDefault();
		var form = $(this);
		var post_data = form.serialize();
		var post_url = form.attr('action');
		if (validate_login()) {
			$('#log_load_m').html("<img src='images/loading.gif' width='32' height='32' />");
			$.ajax({ type: "POST", url: post_url, data: post_data, success: function (msg) { $('#log_load_m').html(msg); } });
		}
		else { alert('Enter Valid Userd Login'); $('#log_load_m').html("Enter Valid Userd Login"); }
	});
});
function error_login_mobile() { $('#log_load_m').html('Invald Id OR Password'); }




function generatePagination(currentPage, totalPages) {
	const paginationContainer = document.getElementById("pagination");
	paginationContainer.innerHTML = ""; // Clear previous content

	// Add "Previous" button
	if (currentPage > 1) {
		const prevLink = document.createElement("a");
		prevLink.className = "prev page-numbers";
		prevLink.innerHTML = '<i class="fas fa-chevron-left"></i>';
		prevLink.onclick = function () {
			loadData(currentPage - 1); // Call the loadData function with the previous page number
		};
		paginationContainer.appendChild(prevLink);
	}

	// Generate page numbers
	for (let i = 1; i <= totalPages; i++) {
		if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
			const pageLink = document.createElement(i === currentPage ? "span" : "a");
			pageLink.className = i === currentPage ? "page-numbers current" : "page-numbers";
			pageLink.textContent = i;
			if (i !== currentPage) {
				pageLink.onclick = function () {
					loadData(i); // Call the loadData function with the selected page number
				};
			}
			paginationContainer.appendChild(pageLink);
		} else if (
			(i === currentPage - 3 || i === currentPage + 3) &&
			totalPages > 5
		) {
			const dots = document.createElement("span");
			dots.className = "page-numbers dots";
			dots.textContent = "…";
			paginationContainer.appendChild(dots);
		}
	}

	// Add "Next" button
	if (currentPage < totalPages) {
		const nextLink = document.createElement("a");
		nextLink.className = "next page-numbers";
		nextLink.innerHTML = '<i class="fas fa-chevron-right"></i>';
		nextLink.onclick = function () {
			loadData(currentPage + 1); // Call the loadData function with the next page number
		};
		paginationContainer.appendChild(nextLink);
	}
}
